import moment from "moment"

export const formatDate = (date) => {
  const d = new Date(date)
  // return moment(d).format("MMM Do, YYYY")
  return moment(d).format("MMMM Do, YYYY, h:mm:ss a")
}

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export const formatRating = (rating) => {
  return formatter.format(rating)
}
