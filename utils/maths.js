export function calculatePercentage(data)
{
    // if (!data.todo && !data.doing && !data.done) {
    //     data.todo = []
    //     data.doing = []
    //     data.done = []
    // }

    let todo = (data?.todo?.filter(e => e !== undefined) ? (data?.todo?.filter(e => e !== undefined).length) : 0);
    let doing = (data?.doing?.filter(e => e !== undefined) ? (data?.doing?.filter(e => e !== undefined).length) : 0);
    let done = (data?.done?.filter(e => e !== undefined) ? (data?.done?.filter(e => e !== undefined).length) : 0);
    let percentage = (1 - (todo + doing)/(todo + doing + done)) * 100;
    if (percentage) return percentage.toFixed(0);
    else return 0;
}
