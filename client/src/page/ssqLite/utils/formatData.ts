const formatData = (data: any) => {
  // console.log(data)
  const red: any = []
  const blue: any = []
  data.forEach(({ red: _red, blue: _blue }: any) => {
    const redData = _red.split(',')
    const blueData = _blue.split(',')
    redData.forEach((num: any) => {
      const index = +num - 1
      if (red[index]) {
        red[index].count = red[index].count + 1
      } else {
        red[index] = {
          number: index + 1,
          count: 1
        }
      }
      
    })

    blueData.forEach((num: any) => {
      const index = +num - 1
      if (blue[index]) {
        blue[index].count = blue[index].count + 1
      } else {
        blue[index] = {
          number: index + 1,
          count: 1
        }
      }
    })
  });
  return {
    red,
    blue
  }
}

export default formatData
