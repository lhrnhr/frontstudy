let cursors = {
  pen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACd0lEQVRYR+2WT2gTQRTGv7eb9JLkmPoHvHkQLy2i94o0KMiyMxgRbwrmpigeFBUJFPHiRegpgiLiQZbMTFoR/4AX7UVQCD14EfGcQkGFiia7T0Yq1HWTbLeGgnSOszPv9/HNex9L2ORFm8zHloD/1gHyff8cEZ0EEAIIyuXybKPR6MZ7biQOCCEaAM6shRHRrFLq7MgF+L5/nIgexUHMHOXz+XIQBMt/CPuXY+h53m7Xdd8BKPWpO6m1bo9EQLVaHet2uwtEtL8P/HMul9sRBMG3kQjwff8WEV3sA2cAp7TW90fSA0KIwwCeAInBxsx8wRhzO0nchqdACDEeRVHbcZztCQA7gjWt9d1+vbYhAfV63Wm3208BTCcAekR0Win1YFCjb0iAEOIygJsJgB9EdEIppYdNWWYBUsoDzPwawFgMssLMwhjzfBjcfs8sQAjRBCBjkC9RFB1ttVqv0sBTC6hUKoVisSiZeS8RPVZKLQghbNTayP29lpn5iDHmTVp4KgGrVhsAO1cLv9RaH7LuSSlvMPN5AF8BVOIpl0bIwCeoVqvlXq+3CGDbmmI2VI5prZXdm5qaypVKpbH5+fmVNMB1BZGUcoaZr8UvMXPXcZx7RHSn2Wy+BWBFZVp9HajVavmlpaVPa6xPBBDRdaXUTCZ6vynwPK/kuu4lAFeHFWbmK8aYpCwYdvXX978ckFLuY2Zra9plm+9F2sNDe8COXKFQ+AhgPEXRxYmJicl6vR6lOJv8hEm71oUwDB86jrNnQOH3YRh6c3NzH7LCB+aAbcJOp3OQiKaZeRcRWUe+A+gQ0TPXdXX85yKLkMxRnAWWdGdLwJYDPwFn/dQhz4OkVwAAAABJRU5ErkJggg==',
  line: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4klEQVRYR+3WTQrCMBCG4fmy8AYeyo2kBS+goAsPJPhzhTEIHso7SEa6EETsXzJjN+m+vE8nhQlo4gcT96kAygRMJ1BV1RrAg5nvbT+7GaCJi8gJwBPAiplvvxAmAO/9hoiOAJyIRCLahhAufwF8fLkjIhGRfQjh8JcjGBtvUGpHkBJXA6TGVQA58WxAbjwLoBFPBmjFkwCa8dEA7fgogEV8MMAqPghgGe8FWMc7Ad8r1Tm3Y+az9i26dRl57xcArkQ061upOajObVjX9TLGOG+7TOSE3++qreNUTAGUCUw+gRcF0dchsIjssQAAAABJRU5ErkJggg==',
  round: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACpUlEQVRYR+2WPW8TQRCG39mLqUBQuKQiCeJDSiT4DRCFwtk964KQ6BCWoCUfonMJOD1gRAkCjG/ODUmB+AcgpQECCVW6NBFQYecGbbSHEhPfnZ0ijbezduedx7PvzhzhiBcdcX4MAYYV6KsCQRAc29nZMSIyA+ASEZ22JhaRTQCfRCQqFApRo9H4k9fcuQG01mUiegTgTIb4BoAFZg7zQGQCBEHgtdvth0R0r0twTUQ2iMhqjAI427W/NDk5uVitVuM0kEwArfXSnuQdInpGREvNZvPHXuFSqTQ2MjIyLyK3AHhur8bMCwMDuLK/dQLbAMrM/CFN0BhzBUADwEnnDxNFUdQrpmcFrOE6nc4Xd+cdAFNZyZMkWuurRPTOVoKI1j3Pu9jLmD0BfN+/LiKvrCgRPQ7D8G4eUyVnjDF1ALfd71lmtlX5b/UEMMa8BHDDRiilRrvvPAumXC6Px3H8zZ17wcw3+wVYs86O4/hrq9U6n5XwoH1jjAUYB7DGzOf6BfgF4DiAZWa+NgiA1nqFiKYA/GbmE4MCrDDz9CEBfjLz7qvoXmke2L2CtPJlQRljMjVymVBExqIosi0297KNyfO87wObUGs9S0SvncATZr6TOzsA3/efikjFPeMgDMOkoe2TyWpEn12f7yilppvN5vs8EK4bLieNqFgsXqjX6+2+PGAPG2N8AE0XuK2UCrIgXPI3AE65OM3MrV7gmcPIGFMDMOcEbEt+LiK1bk8cNIzs+A7DcDGtapkA1WpVra6uPgAw3yVkm4w1ZjKObcP5t2zyiYmJ+4cex4mi1lorpWr2RaT+I6J1EZlLK/s+0DymSs5UKpXC1taWBjATx/FlpdTuJ1kcx5tKqY9EFBWLxVYvw/Vtwn7gBj2b6YFBhfPGDQGGFfgLW7AHMIfxtKYAAAAASUVORK5CYII=',
  trangle: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAl0lEQVRYR+2WsQ2DMBBF/w1BaLIIW/gKGJIU31uwCJUzhFGKVIAEjiUr0nd/95+f5DsbGh9rnA8ByIAMnBoIISQz62o805zzO8b4OOp1CuDuuUb4twfJw6wrACuApRBmAPD81P4C8CI5lQC4+wxgFIAMyIAM/L2B5qO4ZArvam7vgprrGEAi2d9ax1WufaGJvmQyIAPNDWzonXsh3WqxKQAAAABJRU5ErkJggg==',
  eraser: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACaElEQVRYR+2Uv4sTQRTHv28ymKBYqAg2WolYJYKCWByiicGoIRvDdlcE4x9gb5PCWtDK7mxOi3Uzk6RT8VrxB/7qD1s5jyOgiLi7TwY2sIb8mM0WB3LTznvv+5nve/MIu3xol/WxB/B/ONButwuj0egOgGNCiIe+72/azlZmB2q1Wr5QKPgArhtRZt5i5nK/3/9iA5EJYFJ8LJgGYmmAWeJJiFwuV/F9//M8J5YCWCSeENxh5ita6/ezIFIDuK67LwgC0/MbNj0GsCOEqPq+/25afCqAeNoVgKuW4uOwbWauaK0/TuZZA2QQH2tuKqVOmo+ShLACiHtuXn4+Tj6c0gETHkopD3qe9ysVgBHP5/M9IrpARJX4r78AkBbigVLKLKt/zlwHzMCFYfiMmVeIqNrr9d6abMdxzhDRSwBHLJ1YK5VKt7vdbmQNEE+7B+AiM1e11m+SySkgZoqbelMdWCQ+BrGAmCs+E8BxnHUiupa0fZbVjuOcJSIzE4cmYhaKTwWo1+v7pZQ/AHSUUms2PW61WueiKHo+hiCix8VisTOt51Yz0Gw2PwEQUsrLnudt2UA0m827AO6lEZ83AyeCINgA8DsMw0uDweDbPAjHcVoAnhKRL6Vc9TwvtIGeCWAuXNc1EK8A/AyCoDwcDr9PK5pFfC6AuWw0GseFEMYJMxNlpdT2xFdc+uXjOgtXcezEBjOPANzUWn+Nl1GHiB4BeCKlvJXG9lSrOOGEBnA6iqIPQoijAE4x8x8iGpo9b9Hz10qp+1a/YFqxeDmtEtEKMx+wEJwMyQawhKBVysIZsKqSIWgPYNcd+AsPkxIwA3VPaAAAAABJRU5ErkJggg==',
  text: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA5klEQVRYR+2VPwrCMBSHfwlFvIizq6u7y0vR2Qt4A0dP4AmcLSUUhI6Ozs5epA5NpKBQ1Ni0tAThZUxe8r735Z9A4CYC5wcDsAGngTiOJ8aYRR+HVEp5StP09m0tJwARLQEc+wAAsNJaJ38NsDXGnOsVSCnnAHbPvqbxTgam1tp1lUAIcdBaX+sAb1v0kYCIfs5/rdX5GjYB+J4dBmADbIANsIHWBpRSs7IspeszyrLsAsAO9hQT0R3AyJWgKIpxnudVjFdrbSA4gFJqY62NXOVFUbRPkqT0Kr/66n0Dh4pjADYQ3MADakKSIQVRq+oAAAAASUVORK5CYII='
}
export default cursors