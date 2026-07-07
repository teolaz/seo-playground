export const PLATFORMS = [
  { value: 'chat_gpt', label: 'ChatGPT' },
  { value: 'claude', label: 'Claude' },
  { value: 'gemini', label: 'Gemini' },
  { value: 'perplexity', label: 'Perplexity' },
] as const;

export type LlmPlatform = (typeof PLATFORMS)[number]['value'];

export const PLATFORM_LABELS: Record<string, string> = Object.fromEntries(
  PLATFORMS.map((p) => [p.value, p.label]),
);

// Curated shortlist per platform — the model field accepts free text (via
// datalist), so this is just a convenience starting point, not an exhaustive
// list. DataForSEO adds new models over time; type any model_name it supports.
export const MODELS_BY_PLATFORM: Record<LlmPlatform, string[]> = {
  chat_gpt: ['gpt-4o', 'gpt-4o-mini', 'gpt-4.1-nano', 'gpt-5', 'gpt-5-mini', 'gpt-5-nano', 'o3-mini', 'o4-mini'],
  claude: ['claude-opus-4-0', 'claude-sonnet-4-0', 'claude-3-7-sonnet-latest', 'claude-3-5-haiku-latest'],
  gemini: ['gemini-2.5-flash', 'gemini-2.5-pro', 'gemini-1.5-pro', 'gemini-1.5-flash'],
  perplexity: ['sonar', 'sonar-pro', 'sonar-reasoning', 'sonar-reasoning-pro', 'sonar-deep-research'],
};

export function isValidPlatform(value: string): value is LlmPlatform {
  return Object.prototype.hasOwnProperty.call(MODELS_BY_PLATFORM, value);
}
