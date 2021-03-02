const input = document.getElementById('myImage');
const canvas = document.getElementById('myCanvas')
const myContext = canvas.getContext("2d");
myContext.drawImage(input, 0, 0)
async function detect() {
    const MODEL_URL = '/js/weights'

await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
await faceapi.loadFaceLandmarkModel(MODEL_URL)
await faceapi.loadFaceRecognitionModel(MODEL_URL)
    let fullFaceDescriptions = await faceapi.detectAllFaces(canvas).withFaceLandmarks().withFaceDescriptors();
    console.log(fullFaceDescriptions);
    faceapi.draw.drawDetections(canvas, fullFaceDescriptions)
}
detect()

