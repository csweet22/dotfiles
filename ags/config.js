// function Bar(monitor = 0) {
//     const myLabel = Widget.Label({
//         label: 'some example content',
//     })

//     Utils.interval(1000, () => {
//         myLabel.label = Utils.exec('date')
//     })

//     return Widget.Window({
//         monitor,
//         name: `bar${monitor}`,
//         anchor: ['top', 'left', 'right'],
//         child: myLabel,
//     })
// }


export {} // needed by below line
const battery = await Service.import('battery')

const date = Variable('', {
    poll: [1000, 'date'],
})


const batteryProgress = Widget.CircularProgress({
    value: battery.bind('percent').as(p => p / 100),
    child: Widget.Icon({
        icon: battery.bind('icon_name'),
    }),
})

const Bar = () => Widget.Window({
    name: 'bar',
    anchor: ['top', 'left', 'right'],
    child: Widget.Label({ label: date.bind() })
    // child: batteryProgress
})

App.config({
    windows: [
        Bar(),
    ],
})