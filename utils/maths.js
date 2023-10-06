export function calculatePercentage(data)
{
    let todo = (data?.todo ? (data?.todo?.length) : 0);
    let doing = (data?.doing ? (data?.doing?.length) : 0);
    let done = (data?.done ? (data?.done?.length) : 0);
    let percentage = (todo + doing)/(todo + doing + done) * 100;
    return percentage;
}
