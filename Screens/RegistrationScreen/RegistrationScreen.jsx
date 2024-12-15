
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import SvgAddButton from '../../assets/SvgAddButton';

const RegistrationScreen = () => {
 
  return (
    <TouchableWithoutFeedback >
      <View >
        <ImageBackground >
          <View >
            <KeyboardAvoidingView
             
            >
              <View >
                <Image  />
                <TouchableOpacity >
                  <SvgAddButton  />
                </TouchableOpacity>
              </View>
              <Text >Реєстрація</Text>
              <TextInput  placeholder="Логін"  />
              <TextInput
               
                placeholder="Адреса електронної пошти"
               
              />
              <View >
                <TextInput
             
                  placeholder="Пароль"
                  
                />
                <TouchableOpacity >
                  <Text >Показати</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>

            
              <View>
                <TouchableOpacity >
                  <Text >Зареєструватися</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Text >
                    Вже є акаунт? <Text >Увійти</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;