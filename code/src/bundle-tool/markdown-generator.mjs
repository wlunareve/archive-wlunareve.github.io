import fs from'fs';
const capitalizeFirstLetter = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

fs.readFile('../assets/markdown/list.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  generateMarkdownComponents(JSON.parse(data))
})

const generateMarkdownComponents = (markdownList) => {
  const componentsCode = markdownList.reduce((components, { path }) => {
    const key = path
      .split(/\/|_/)
      .map(text => capitalizeFirstLetter(text))
      .join('')

    // can't use Template literals and vite resolve alias
    return `
      ${components}${[key]}: defineAsyncComponent(() => import("../../assets/markdown/${path}.md")),
    `
  }, '')

  console.log(componentsCode)
}

