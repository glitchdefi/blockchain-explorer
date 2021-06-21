import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    past: "%s ago",
    s: "%d second ago",
    ss: "%d seconds ago",
    m: "%d minute ago",
    mm: "%d minutes ago",
    h: "%d hour ago",
    hh: "%d hours ago",
    d: "%d day ago",
    dd: "%d days ago",
    w: "%d week ago",
    ww: "%d weeks ago",
    M: "%d month ago",
    MM: "%d months ago",
    y: "%d year ago",
    yy: "%d years ago",
  },
});

export const D_FOR_TABLE = "YYYY-MM-DD";
export const D_FOR_DETAIL = "MMM-DD-YYYY";

export function formatTimeAgo(date) {
  if (date) {
    const fromNow = moment(date).fromNow(true);

    if (Number(fromNow.slice(0, 2)) > 1 && fromNow.includes("second")) {
      return fromNow.replace("second", "seconds");
    }

    return fromNow;
  }

  return moment().fromNow(true);
}

export function formatDateTimeUTC(dateTime, formatDate) {
  if (dateTime) {
    return moment
      .utc(dateTime)
      .format(`${formatDate || "MMM-DD-YYYY"} h:mm:ss A`);
  }

  return moment()
    .utc()
    .format(`${formatDate || "MMM-DD-YYYY"} h:mm:ss A`);
}
