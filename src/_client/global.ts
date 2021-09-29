import { Banner } from '../_type/banner'
import { UserMin } from '../_type/user'
import { ConfigMin } from '../_type/config'

export function useConfig() {
  // @ts-ignore
  return _config as ConfigMin
}

export function userSessionUser() {
  // @ts-ignore
  return _user as UserMin | null
}

export function useBanner() {
  // @ts-ignore
  return _banner as Banner[]
}

