import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Pencil, Check, X } from 'lucide-react';

interface InlineEditableTextProps {
  contentKey: string;
  defaultText: string;
  className?: string;
  pagePath?: string;
}

export const InlineEditableText = ({ 
  contentKey, 
  defaultText, 
  className = "",
  pagePath = "/"
}: InlineEditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(defaultText);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, [contentKey]);

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('content_blocks')
        .select('content_data')
        .eq('key', contentKey)
        .eq('page_path', pagePath)
        .maybeSingle();

      if (error) throw error;
      
      if (data?.content_data && typeof data.content_data === 'object' && 'text' in data.content_data) {
        setText(data.content_data.text as string);
      }
    } catch (error) {
      console.error('Error loading content:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveContent = async () => {
    try {
      const { error } = await supabase
        .from('content_blocks')
        .upsert({
          key: contentKey,
          page_path: pagePath,
          content_type: 'text',
          content_data: { text }
        }, {
          onConflict: 'key,page_path'
        });

      if (error) throw error;
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving content:', error);
    }
  };

  const handleCancel = () => {
    loadContent();
    setIsEditing(false);
  };

  if (isLoading) {
    return <p className={className}>{defaultText}</p>;
  }

  return (
    <div className="group relative">
      {isEditing ? (
        <div className="flex items-center gap-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={`${className} border border-gray-300 rounded px-2 py-1 resize-none`}
            rows={3}
            autoFocus
          />
          <div className="flex flex-col gap-1">
            <button
              onClick={saveContent}
              className="p-1 text-green-600 hover:bg-green-100 rounded"
            >
              <Check size={16} />
            </button>
            <button
              onClick={handleCancel}
              className="p-1 text-red-600 hover:bg-red-100 rounded"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative">
          <p className={className}>{text}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="absolute -right-6 top-0 opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 transition-opacity"
          >
            <Pencil size={14} />
          </button>
        </div>
      )}
    </div>
  );
};