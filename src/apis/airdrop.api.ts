import { AxiosInstance } from 'axios'
import request, { TResponse } from './request'

interface TAirDropInfo {
  register_flag: number
  address: `0x${string}`
  sol_address: string
}

interface TLinkSolAddressParams {
  address: string
  sol_address: string
  signature: string
  message: string
}

class AirdropApi {
  constructor(private request: AxiosInstance) {}

  async getAirdropInfo(address: string) {
    const res = await this.request.post<TResponse<TAirDropInfo>>('/ad/account/info', { user_id: address })
    return res.data
  }

  async linkSolAddress(params: TLinkSolAddressParams) {
    const res = await this.request.post<TResponse<TAirDropInfo>>('/ad/account/register', params)
    return res.data
  }
}

export default new AirdropApi(request)
