cd android

rm -rf app/src/main/assets/index.android.bundle
rm -rf ./app/src/main/res/drawable-*
rm -rf ./app/src/main/res/raw

./gradlew clean

rm -rf build
rm -rf app/build

