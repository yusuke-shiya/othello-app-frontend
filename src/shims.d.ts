declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import type { ComponentOptionsBase } from 'vue'
  const component: DefineComponent<{}, {}, any> & ComponentOptionsBase
  export default component
}
