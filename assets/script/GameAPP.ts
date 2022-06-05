import { _decorator, Component, Node } from 'cc';
import { FeatureA } from './FeatureA';
const { ccclass, property } = _decorator;

@ccclass('GameAPP')
export class GameAPP extends Component {


    private featurea:FeatureA = null;


    start() {
        
        this.featurea = new FeatureA();
        this.featurea.firstMethod();
            
    }

    update(deltaTime: number) {
        
    }



}

