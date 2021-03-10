import MyProvider from './provider';
import { registerRootComponent } from 'expo';

//Custom configuration setup, using registerRootComponent to apply
//provider content as the main application page
export default registerRootComponent(MyProvider);