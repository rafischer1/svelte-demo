import { SvelteComponent } from "svelte"
import List from "./List.svelte"

export interface Route  {
  	path: string,
		component: any,
		auth?: boolean
}

export const Routes: Route[] = [
  {path: "/", component: List},
  {path: "/docs", component: List},
]