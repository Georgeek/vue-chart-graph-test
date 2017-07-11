import moment from 'moment';

export const dateToYear = date => moment(date).format('YYYY'),
            dateToMonth = date => moment(date).format('MMM YYYY'),
            dateToWeek = date => moment(date).format('GGGG-[W] WW'),
            dateToDay = date => moment(date).format('DD-MM-YYYY'),
            dateBeautify = date => moment(date).format('Do MMMM YYYY');
