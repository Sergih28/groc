export const colorToRgb = (color: string) => {
  const tempElem = document.createElement('div')
  tempElem.style.color = color

  document.body.appendChild(tempElem)

  const computedColor = window.getComputedStyle(tempElem).color

  document.body.removeChild(tempElem)

  return computedColor
}
