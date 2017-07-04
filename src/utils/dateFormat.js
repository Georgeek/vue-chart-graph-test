import moment from 'moment';

export const dateToYear = date => moment(date).format('YYYY'),
            dateToMonth = date => moment(data).format('MMM YYYY'),
            dateToWeek = date => moment(data).format('GGGG-[W] WW'),
            dateToDay = date => moment(data).format('DD-MM-YYYY'),
            dateBeautify = date => moment(date).format('Do MMMM YYYY');
