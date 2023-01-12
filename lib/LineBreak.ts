import { DirectiveHook } from 'vue'
import { loadDefaultJapaneseParser } from 'budoux'

const bind: DirectiveHook = (el: HTMLElement) => {
  const parser = loadDefaultJapaneseParser();
  const text = el.textContent || ''

  el.style.wordBreak = 'keep-all'
  el.style.overflowWrap = 'break-word'

  el.innerHTML = parser.parse(text).join('<wbr>')
}

export default bind
