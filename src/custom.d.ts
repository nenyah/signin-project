declare namespace my {
  interface ComplexChooseSuccessResult {
    /**
     *    选择人数
     */
    readonly selectedCount: number
    /**
     * 返回选人的列表，列表中的对象包含name（用户名）、avatar（用户头像）、userId（用户工号）三个字段。
     */
    readonly users: string[]
    /**
     * 返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、count（部门人数）。
     */
    readonly departments: string[]
  }

  interface IComplexChoose {
    /**
     * 标题
     */
    title?: string
    /**
     * 是否多选
     */
    multiple?: boolean
    /**
     * 超过限定人数返回提示
     */
    limitTips?: string
    /**
     * 最大可选人数
     */
    maxUsers?: number
    /**
     * 已选用户
     */
    pickedUsers?: any[]
    /**
     * 已选部门
     */
    pickedDepartments?: any[]
    /**
     * 不可选用户
     */
    disabledUsers?: any[]
    /**
     * 不可选部门
     */
    disabledDepartments?: any[]
    /**
     * 必选用户（不可取消选中状态）
     */
    requiredUsers?: any[]
    /**
     * 必选部门（不可取消选中状态）
     */
    requiredDepartments?: any[]
    /**
     * 可添加权限校验，选人权限，目前只有GLOBAL这个参数
     */
    permissionType?: string
    /**
     * 返回人，或者返回人和部门
     */
    responseUserOnly?: boolean

    /**
     * 操作成功回调函数
     * @param res
     */
    success?(res: ComplexChooseSuccessResult): void
  }

  /**
   * 选人与部门
   * @param {my.IComplexChoose} options
   */
  function complexChoose(options: IComplexChoose): void
}
declare namespace dd {
  interface ICompressImage {
    /**
     * 要压缩的图片地址数组。
     */
    filePaths: string[]
    /**
     * 压缩级别，支持 0 ~ 4 的整数，默认 4。
     *    0：低质量。
     *    1：中等质量。
     *    2：高质量。
     *    3：不压缩。
     *    4：根据网络适应。
     */
    compressLevel?: Number
    /**
     * 成功回调
     * @param res any
     */
    success?(res: { filePaths: string[]; apFilePaths: string[] }): void
    /**
     * 失败回调
     * @param res
     */
    fail?(res: any): void
    /**
     * 完成回调
     * @param res
     */
    complete?(res: any): void
  }
  /**
   * 压缩图片
   * @param options IcompressImage
   */
  function compressImage(options: ICompressImage): void
}
