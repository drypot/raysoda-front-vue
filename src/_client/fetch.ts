import { onBeforeRouteUpdate } from 'vue-router'

export function fetchData(f:() => void) {
  onBeforeRouteUpdate((to) => {
    f()
  })
  f()
}
