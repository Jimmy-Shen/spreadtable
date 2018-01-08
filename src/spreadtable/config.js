export default {
    default: {
        width: 800,
        height: 600,
    },
    point: {
        center: [0, 0],
    },
    width: {
        serial: 30,
        scroll: 20,
        right: 40,
        cell: 80,
    },
    height: {
        row: 20,
        nav: 60,
        toolbar: 30,
        fx: 30,
        columns: 25,
        bottom: 40,
        sheet: 30,
    },
    getHeaderHeight() {
        const { nav, fx, toolbar, sheet } = this.height
        return nav + fx + toolbar + sheet + 20
    },
}
