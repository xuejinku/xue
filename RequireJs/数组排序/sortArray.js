/**
 * Created by xuejinku on 2018/5/20.
 */
define(['isArray'],function (isArray) {

    function sortArray(arr) {
        if(isArray(arr)){
            arr.sort(function (x,y) {
                return x-y;//从小到大排序    y-x是从大到小
            });
            return arr;
        }
        return '请输入数组。。。'
    }
    return sortArray;
});