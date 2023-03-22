export const capitalizeFirstLetterAllWords = (str: string) => {
  // Primeira letra de toda palavra maiúscula
  const subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })
  return subst
}
