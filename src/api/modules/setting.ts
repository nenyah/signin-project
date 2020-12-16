/*
 * @Description:
 * @Author: Steven
 * @Date: 2020-10-28 11:17:38
 * @LastEditors: Steven
 * @LastEditTime: 2020-11-23 11:24:03
 */

import request from "@/utils/request"
import { ISetting } from "@/common/interface"
export default {
  webSetting: (data: { name: string }): Promise<ISetting> => {
    return request.get("webSetting", data)
  },
}
