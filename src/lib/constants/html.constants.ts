export const BOLD_TAG = {
    name: 'bold',
    regex: /<b>.*?<\/b>/g,
    opening: '<b>',
    ending: '</b>',
};
export const ITALIC_TAG = {
    name: 'italic',
    regex: /<i>.*?<\/i>/g,
    opening: '<i>',
    ending: '</i>',
};
export const AUTHORIZED_HTML_TAGS = [BOLD_TAG.opening, ITALIC_TAG.opening];
export const REGEX_HTML_TAGS = /<[a-z]*>/g;
