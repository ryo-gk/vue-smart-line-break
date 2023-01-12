import { App } from 'vue'
import LineBreakDirective from './LineBreak'

const LineBreak = {
  install: (app: App) => {
    app.directive('line-break', LineBreakDirective)
  }
}

export default LineBreak
