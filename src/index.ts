import capitalize from 'capitalize';
import { MSG_EMOJI_MAP } from './config';

const msgMatch = /([\S\s]+)\s*:\s*([\S\s]+)/;
const scopeMatch = /([\S\s]+)\(([\S\s]+)\)\s*/;

/**
 * @public
 * Capitalize the first letter in the message and add an emoji that match to the message type
 * @param {string} msg string
 * @returns {string}
 */
export default function (msg: string): string {
  if (!msgMatch.test(msg)) {
    return getCapitalizedContent(msg);
  }
  const transformedMsg = msg.replace(msgMatch, (_match, prefix, content) => {
    const capitalizedMsg = getCapitalizedContent(content);
    if (scopeMatch.test(prefix)) {
      prefix = prefix.replace(scopeMatch, scopeRelacer);
    }
    const emoji = MSG_EMOJI_MAP[prefix];
    if (emoji) {
      return `${emoji} ${capitalizedMsg}`;
    }
    return `${prefix}: ${capitalizedMsg}`;
  });

  return transformedMsg;
}

/**
 * @private
 * Capitalize the first letter in the message
 * @param {string} content string
 * @returns {string}
 */
function getCapitalizedContent(content: string): string {
  return capitalize(content, true);
}

/**
 * @private
 * handle scope case
 * @param {string} match string
 * @param {string} prefix string
 * @param {string} scope string
 * @returns {string}
 */
function scopeRelacer(match, prefix, scope): string {
  const emoji = MSG_EMOJI_MAP[prefix];
  return emoji ? `${emoji}(${scope})` : match;
}
