/**
 * msg => emoji map
 */
export const MSG_EMOJI_MAP: Record<string, string> = {
  /** A new feature */
  feat: '✨',
  /** A bug fix */
  fix: '🐛',
  /** Documentation only changes */
  doc: '📖',
  /** Documentation only changes */
  docs: '📖',
  /** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) */
  style: '💄',
  /** A code change that neither fixes a bug nor adds a feature */
  refactor: '🛠',
  /** A code change that improves performance */
  perf: '⚡️',
  /** Adding missing tests or correcting existing tests */
  test: '✅',
  /** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) */
  build: '📦',
  /** Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) */
  ci: '⚙️',
  /** Other changes that don't modify src or test files */
  chore: '🚀',
  /** Reverts a previous commit */
  revert: '🗑',
  /** Add untested to production */
  try: '🤞',
  /** Project init */
  init: '🎉',
};
