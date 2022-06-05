/*
 * @Description: 
 * @Version: 1.0
 * @Company: rct.AI
 * @Autor: Yv Pu
 * @Date: 2022-06-05 16:42:09
 * @LastEditors: Yv Pu
 * @LastEditTime: 2022-06-05 16:58:07
 */
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('FeatureA')
export class FeatureA extends Component {


    public firstMethod(){
        console.error("method1");
    }


    

    start() {

    }

    update(deltaTime: number) {
        
    }
}

