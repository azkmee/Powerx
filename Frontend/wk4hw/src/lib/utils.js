export const shortenedSentence = (text, charLimit = 200) => {
    const edited  = text.slice(0, charLimit)
    return edited + '...'
}