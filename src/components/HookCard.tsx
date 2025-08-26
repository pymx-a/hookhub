import { Hook, HookCategory } from '@/types/hook';
import { Star, ExternalLink, Code, Tag } from 'lucide-react';

interface HookCardProps {
  hook: Hook;
}

const getCategoryColor = (category: HookCategory): string => {
  const colors = {
    [HookCategory.MONITORING]: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    [HookCategory.SECURITY]: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    [HookCategory.WORKFLOW]: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    [HookCategory.TESTING]: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    [HookCategory.INTEGRATION]: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    [HookCategory.UTILITY]: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200',
    [HookCategory.LEARNING]: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    [HookCategory.TEAM]: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
  };
  return colors[category];
};

const getLanguageColor = (language: string): string => {
  const colors: { [key: string]: string } = {
    'Python': 'bg-blue-500',
    'JavaScript': 'bg-yellow-500',
    'TypeScript': 'bg-blue-600',
    'PHP': 'bg-purple-600',
    'Go': 'bg-cyan-500',
    'Rust': 'bg-orange-600',
    'Java': 'bg-red-500',
  };
  return colors[language] || 'bg-gray-500';
};

export default function HookCard({ hook }: HookCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col h-full">
      {/* Header with name and featured badge */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 flex-1">
          {hook.name}
        </h3>
        {hook.featured && (
          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            Featured
          </span>
        )}
      </div>

      {/* Category badge */}
      <div className="mb-3">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(hook.category)}`}>
          {hook.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1 line-clamp-3">
        {hook.description}
      </p>

      {/* Author and stars */}
      <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center">
          <Code className="w-4 h-4 mr-1" />
          {hook.author}
        </span>
        {hook.stars && (
          <span className="flex items-center">
            <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
            {hook.stars.toLocaleString()}
          </span>
        )}
      </div>

      {/* Language and hook types */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className={`w-3 h-3 rounded-full ${getLanguageColor(hook.language)} mr-2`}></div>
          <span className="text-sm text-gray-600 dark:text-gray-300">{hook.language}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {hook.hookTypes.slice(0, 3).map((type) => (
            <span
              key={type}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
            >
              <Tag className="w-3 h-3 mr-1" />
              {type}
            </span>
          ))}
          {hook.hookTypes.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-0.5">
              +{hook.hookTypes.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* GitHub button */}
      <div className="mt-auto">
        <a
          href={hook.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}