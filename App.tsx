import {
  default as AnimatedLottieView,
  default as LottieView,
} from 'lottie-react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'

export default function App() {
  const animationRef = useRef<AnimatedLottieView>(null)
  const [isPause, setIsPause] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      animationRef.current?.reset()
      animationRef.current?.play()
    }, 100)
  }, [])

  const resume = () => {
    animationRef.current?.resume()
    setIsPause(false)
  }

  const pause = () => {
    animationRef.current?.pause()
    setIsPause(true)
  }

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animationRef}
        style={styles.lottieView}
        source={require('./assets/fire-to-heart.json')}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={isPause ? 'Resume' : 'Pause'}
          onPress={isPause ? resume : pause}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  lottieView: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    paddingTop: 20,
  },
})
