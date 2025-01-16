const updateTextStyle = () => {
  document.getElementById('demo-text').style.color = 'white'
  document.getElementById('demo-text').style.fontSize = '30px'
  document.getElementById('demo-text').style.backgroundColor = 'black'
}

const setLight = (status) => {
  if (status === 'on') {
    document.getElementById('demo-bulb').src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUwcnG8QTZUhXA4XbMef8Z9M1Ey54gAZjLRfcYdWemPffyt3jkC_bAB0YPYitHpLNkl8&usqp=CAU'
  } else {
    document.getElementById('demo-bulb').src =
      'https://st.depositphotos.com/37378518/60435/v/450/depositphotos_604351950-stock-illustration-light-bulb-icon-isolated-white.jpg'
  }
}
