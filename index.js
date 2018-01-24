import './index.scss';
import moment from 'moment';

setInterval(() => {
    document.querySelector('.clock').textContent = moment().format('LTS')
}, 1000)

console.log(moment);