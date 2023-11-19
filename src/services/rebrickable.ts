import axios from 'axios'

// export const getItemRebrickable = async () => {
//   const response = await axios.get('https://rebrickable.com/api/v3/lego/colors/?key=e3992c1900a42e2023b0c0a79c8b3d4a')
//   console.log(response)
// }

export const getItemRebrickable = async () => {
  const response = await axios.get(
    `https://rebrickable.com/api/v3/lego/minifigs/?key=${process.env.NEXT_PUBLIC_REBRICKABLE_API_KEY}`,
  )

  // const search = JSON.stringify('Customer Kid')
  //
  // const response = await axios.get(
  //   `https://rebrickable.com/api/v3/lego/minifigs/?key=${process.env.NEXT_PUBLIC_REBRICKABLE_API_KEY}&search=${search}`,
  // )

  console.log(response)
}
