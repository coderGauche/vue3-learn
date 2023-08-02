/*
 * @Author: Gauche楽
 * @Date: 2023-08-02 16:22:56
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-08-02 16:29:38
 * @FilePath: /05_composition/src/components/mixin/index.js
 */
const homeMixin = {
    created() {
        this.handelChange()
    },
    methods: {
        handelChange() {
            console.log('xxxx');
        }
    },
}

export default homeMixin