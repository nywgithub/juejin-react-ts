/* action类型 */
export const SEARCH_VALUE = "SEARCH_VALUE"

/* action 创建函数 */
export function addSearch(value){
    return{
        type:SEARCH_VALUE,
        value
    }
}