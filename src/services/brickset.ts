import axios, { AxiosRequestConfig } from 'axios'

const apiKey = process.env.NEXT_PUBLIC_BRICKSET_API_KEY

const config: AxiosRequestConfig<any> = {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  // data: {},
}

export const checkKeyBrickset = async () => {
  const response = await axios.get(`https://brickset.com/api/v3.asmx/checkKey?apiKey=${apiKey}`)

  // const response = await axios.post(
  //   `https://brickset.com/api/v3.asmx/checkKey`,
  //   {
  //     apiKey: apiKey,
  //   },
  //   config,
  // )

  console.log(response)
}

export const checkUserHashBrickset = async () => {
  const userHash = await getUserHashBrickset()
  const response = await axios.get(
    `https://brickset.com/api/v3.asmx/checkUserHash?apiKey=${apiKey}&userHash=${userHash}`,
  )

  console.log(response)
}

export const getUserHashBrickset = async (): Promise<string> => {
  const response = await axios.get(
    `https://brickset.com/api/v3.asmx/login?apiKey=${apiKey}&username=${process.env.NEXT_PUBLIC_BRICKSET_USERNAME}&password=${process.env.NEXT_PUBLIC_BRICKSET_PASSWORD}`,
  )
  return response.data.hash
}

export const getItemBrickset = async () => {
  const params = JSON.stringify({ owned: '1' })

  const userHash = await getUserHashBrickset()
  const response = await axios.get(
    `https://brickset.com/api/v3.asmx/getMinifigCollection?apiKey=${apiKey}&userHash=${userHash}&Params=${params}`,
  )

  console.log(response)
}

export const getSetsBrickset = async () => {
  const params = JSON.stringify({ theme: 'space', year: '1978,1979' })

  const userHash = await getUserHashBrickset()
  const response = await axios.get(
    `https://brickset.com/api/v3.asmx/getSets?apiKey=${apiKey}&userHash=${userHash}&Params=${params}`,
  )

  console.log(response)
}
