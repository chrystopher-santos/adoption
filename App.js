import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Pressable, onPress } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MainView = ({navigation}) => {
  return (
    <View style={stylesHome.container}>
          <Image style={stylesHome.img} source={require('./pata-amarela.png')} />
            <text style={stylesHome.pata}> P.A.T.A. </text>
            <text style={stylesHome.paragraph}> Plataforma de adoção para todos os animais. </text>
            <Pressable style={stylesHome.btn} onPress={() => navigation.navigate('Login')}>
                  <Text style={stylesHome.btn} > Entrar </Text>
            </Pressable>
            <div className="cadastrese">
              <text 
                style={stylesHome.ou} >Ou 
                <Pressable onPress={() => navigation.navigate('Cadastro')}>
                  <Text style={stylesHome.link} > cadastre-se </Text>
                </Pressable>
            </text>
            </div>
    </View>
  )
}

const LoginScreen = ({route, navigation}) => {
  return (
    <View style={stylesHome.container}>
        <Image style={stylesLogin.img} source={require('./pata-amarela.png')} />          
        <text style={stylesLogin.login}>Login</text>
        <form>
          <label>
            <div className="input-email" style={stylesLogin.esquerda}> 
               <text  style={stylesLogin.paragraph}>E-mail: </text>
            </div> 
            <input style={stylesLogin.input} type="email" name="email" class="inputs" placeholder="Digite seu e-mail"/>
            <div className="input-password" style={stylesLogin.esquerda}> 
              <text  style={stylesLogin.paragraph}>Senha: </text>
            </div>
            <input style={stylesLogin.input} type="password" name="password" class="inputs" placeholder="Digite sua senha"/>
          </label>
        </form>
        <div className="enviar" style={stylesLogin.espaco}>       
        <Pressable style={stylesCadastrook.btn} onPress={() => navigation.navigate('Bem vindo')}>
            <Text style={stylesCadastrook.btn} > Enviar </Text>
        </Pressable>
        </div>
    </View>
  )
}

const CadastroScreen = ({route, navigation}) => {
  return (
    <View style={stylesHome.container}>
        <Image style={stylesLogin.img} source={require('./pata-amarela.png')} />          
        <text style={stylesLogin.login}>Cadastre-se</text>
        <form>
          <label>
            <div className="input-name" style={stylesLogin.esquerda}> 
               <text  style={stylesLogin.paragraph}>Nome completo: </text>
            </div> 
            <input style={stylesLogin.input} type="name" name="name" class="inputs" placeholder="Digite seu nome completo"/>
            <div className="input-e-mail" style={stylesLogin.esquerda}> 
               <text  style={stylesLogin.paragraph}>E-mail: </text>
            </div> 
            <input style={stylesLogin.input} type="email" name="email" class="inputs" placeholder="Digite seu e-mail"/>
            <div className="input-password" style={stylesLogin.esquerda}> 
              <text  style={stylesLogin.paragraph}>Senha: </text>
            </div>
            <input style={stylesLogin.input} type="password" name="password" class="inputs" placeholder="Digite sua senha"/>
          </label>
        </form>
        <div className="enviar" style={stylesLogin.espaco}>       
        <Pressable style={stylesCadastrook.btn} onPress={() => navigation.navigate('Cadastrook')}>
            <Text style={stylesCadastrook.btn} > Enviar </Text>
        </Pressable>
        </div>
    </View>
  )
}

const CadastrookScreen = ({route, navigation}) => {
  return(
    <View style={stylesHome.container}>
        <Image style={stylesCadastrook.img} source={require('./pata-amarela.png')} />          
        <text style={stylesLogin.login}>O cadastro ta ok!</text>
        <text style={stylesCadastrook.paragraph}>Agora você já pode voltar à tela de login e logar normalmente na plataforma. </text>
        <Image style={stylesCadastrook.ok} source={require('./ok.png')} />          
        <div className="enviar" style={stylesLogin.espaco}>       
        <Pressable style={stylesCadastrook.btn} onPress={() => navigation.navigate('Login')}>
            <Text style={stylesCadastrook.btn} > Ir para a tela de login  </Text>
        </Pressable>
        </div>
    </View>
  )
}

const WelcomeScreen = ({route, navigation}) => {
  return (
    <View style={stylesHome.container}>
      <Image style={stylesLogin.img} source={require('./pata-amarela.png')} />          
      <text style={stylesLogin.login}>Bem vindo!</text>
      <text style={stylesCadastrook.paragraph}>O que você deseja fazer? </text>
        <div className="enviar" style={stylesLogin.espaco}>       
        <Pressable style={stylesCadastrook.btn2} onPress={() => navigation.navigate('Animais encontrados')}>
            <Text style={stylesCadastrook.btn2} > Localizei um animal </Text>
        </Pressable>
        </div>
        <div className="enviar" style={stylesLogin.espaco}>       
        <Pressable style={stylesCadastrook.btn} onPress={() => navigation.navigate('Adoção de animais')}>
            <Text style={stylesCadastrook.btn} > Quero adotar um animal </Text>
        </Pressable>
        </div>
    </View>
  )
}

const FoundAnimals = ({route, navigation}) => {
  return (
  <View style={stylesHome.container}>
    <Image style={stylesLogin.img} source={require('./pata-amarela.png')} />          
      <text style={stylesHome.pata}> P.A.T.A. </text>
        <text style={stylesLogin.login}>Animais encontrados</text>
        <form>
          <label>
            <div className="classfication-animals" style={stylesLogin.esquerda}> 
               <div class="select-animal" style={stylesFounAnimal.space}>
                  <text  style={stylesLogin.paragraph}>Tipo de animal encontrado:  </text>
                  <select style={stylesFounAnimal.select}>
                    <option value="null">Selecione um animal</option>
                    <option value="Gato">Gato</option>
                    <option value="Cachorro">Cachorro</option>
                    <option value="Passarinho">Passarinho</option>
                    <option value="Cavalo">Cavalo</option>
                  </select>
                </div>
              <div class="select-city" style={stylesFounAnimal.space}>
                  <text  style={stylesLogin.paragraph}>Onde você o encontrou?  </text>
                  <select style={stylesFounAnimal.select}>
                    <option value="null">Selecione uma cidade</option>
                    <option value="Porto Alegre">Porto Alegre</option>
                    <option value="Cachoeirinha">Cachoeirinha</option>
                    <option value="Alvorada">Alvorada</option>
                    <option value="Canoas">Canoas</option>
                    <option value="Gravataí">Gravataí</option>
                  </select>
                </div>
              <div class="select-state-of-health" style={stylesFounAnimal.space}>
                  <text  style={stylesLogin.paragraph}>Qual o estado de saúde dele?  </text>
                  <select style={stylesFounAnimal.select}>
                    <option value="null">Selecione um estado</option>
                    <option value="Bom">Bom - apenas abandonado</option>
                    <option value="Estavel">Estável - apresenta sinais de fome</option>
                    <option value="Moderado">Moderado - extrema magreza</option>
                    <option value="Grave">Grave - apresenta ferimentos </option>
                    <option value="Critico">Crítico - ferimentos e extrema magreza</option>
                  </select>
                </div>
            </div>
          </label>
        </form>
        <div className="enviar" style={stylesLogin.espaco}>       
        <Pressable style={stylesCadastrook.btn} onPress={() => navigation.navigate('Ongs parceiras')}>
            <Text style={stylesCadastrook.btn} > Enviar </Text>
        </Pressable>
        </div>
    </View>
  )
}

const AdoptAnimals = ({route, navigation}) => {
  return (
  <View style={stylesHome.container}>
    <Image style={stylesLogin.img} source={require('./pata-amarela.png')} />          
      <text style={stylesHome.pata}> P.A.T.A. </text>
        <text style={stylesLogin.login}>Adoção de animais:</text>
        <form>
          <label>
            <div className="classfication-animals" style={stylesLogin.esquerda}> 
               <div class="select-animal" style={stylesFounAnimal.space}>
                  <text  style={stylesLogin.paragraph}>Tipo de animal que busco:  </text>
                  <select style={stylesFounAnimal.select}>
                    <option value="null">Selecione um animal</option>
                    <option value="Gato">Gato</option>
                    <option value="Cachorro">Cachorro</option>
                    <option value="Passarinho">Passarinho</option>
                    <option value="Cavalo">Cavalo</option>
                  </select>
                </div>
              <div class="select-city" style={stylesFounAnimal.space}>
                  <text  style={stylesLogin.paragraph}>Onde você mora?  </text>
                  <select style={stylesFounAnimal.select}>
                    <option value="null">Selecione uma cidade</option>
                    <option value="Porto Alegre">Porto Alegre</option>
                    <option value="Cachoeirinha">Cachoeirinha</option>
                    <option value="Alvorada">Alvorada</option>
                    <option value="Canoas">Canoas</option>
                    <option value="Gravataí">Gravataí</option>
                  </select>
                </div>
              </div>
          </label>
        </form>
        <div className="enviar" style={stylesLogin.espaco}>       
        <Pressable style={stylesCadastrook.btn} onPress={() => navigation.navigate('Animais disponíveis')}>
            <Text style={stylesCadastrook.btn} > Enviar </Text>
        </Pressable>
        </div>
    </View>
  )
}

const AnimalScreen = ({route, navigation}) => {
  return (
    <View style={stylesHome.container}>
      <Image style={stylesLogin.img} source={require('./pata-amarela.png')} />          
      <text style={stylesLogin.login}>Aqui temos alguns amigos em busca de uma família: </text>
      <div className="animais" style={stylesLogin.espaco}>
        <Image style={styleAnimal.img} source={require('./vira-lata-caramelo.jpg')} />    
        <div className="btns"> 
          <table>
            <tr>
              <td>
                 <div>
                    <Pressable className="btn-right" onPress={() => navigation.navigate('next-foto')}>
                        <Image style={styleAnimal.img2} source={require('./flecha-esquerda.png')} />   
                    </Pressable>
                 </div>
              </td>
              <td>
                 <div>
                    <Pressable onPress={() => navigation.navigate('back-foto')}>
                      <Image style={styleAnimal.img1} source={require('./flecha-direita.png')} /> 
                  </Pressable>
                </div>
              </td>       
            </tr>
          </table>
        </div>    
      </div>
      <div className="enviar" style={stylesLogin.espaco}>       
          <Pressable style={stylesCadastrook.btn} onPress={() => navigation.navigate('Detalhes da ONG')}>
            <Text style={stylesCadastrook.btn} > É esse! </Text>
          </Pressable>
        </div>
    </View>
  )
}

const OngListScreen = ({route, navigation}) => {
  return (
     <View style={stylesHome.container}>
      <Image style={stylesLogin.img} source={require('./pata-amarela.png')} />          
      <text style={stylesLogin.login}>Obrigado por seu report.</text>
      <text style={stylesCadastrook.paragraph}>Abaixo temos uma lista de ONGs parceiras em que você pode levar o animal ou pedir para retirarem ele:
</text>
      <div className="ongs" style={stylesLogin.espaco}>
        <div className="ongs-list"> 
          <table>
            <tr>
              <td style={styleOngs.container}>
              </td>
              <td style={styleOngs.container}>
                <div id='0' className="ong-data" styles={styleOngs.container} >
                  <Image style={styleOngs.img} source={require('./redondo.png')} /> 
                  <div>
                    <text style={stylesLogin.paragraph}>Nome: Associação Riograndense de Proteção aos Animais {}</text>   
                  </div>
                  <div> 
                      <text style={stylesLogin.paragraph}>Endereço: R. Prof. Freitas e Castro, 172 - Azenha, Porto Alegre - RS,90040-400 </text>
                  </div>
                  <div> 
                      <text style={stylesLogin.paragraph}>Contato:(51) 3223-1914</text>
                  </div>
                </div>
                 <div id='1' className="ong-data" styles={styleOngs.container}>
                 <Image style={styleOngs.img} source={require('./numero-2.png')} />
                  <div>
                    <text style={stylesLogin.paragraph}>Nome:  Marcia Becker</text>   
                  </div>
                  <div> 
                      <text style={stylesLogin.paragraph}>Endereço: Estr. Floriano Pacheco, 1355 - Itacolomi, Gravataí - RS, 94240-300 </text>
                  </div>
                  <div> 
                      <text style={stylesLogin.paragraph}>Contato:  (51) 98515-9667 </text>
                  </div>
                </div>
              </td>     
            </tr>
          </table>
        </div>    
      </div>
      <div className="enviar" style={stylesLogin.espaco}>       
          <Pressable style={stylesCadastrook.btn} onPress={() => navigation.navigate('Bem vindo')}>
            <Text style={stylesCadastrook.btn} > OK</Text>
          </Pressable>
        </div>
    </View>
  )
}

const OngDetailsScreen = ({route, navigation}) => {
  return (
     <View style={stylesHome.container}>
      <Image style={stylesLogin.img} source={require('./pata-amarela.png')} />
       <text style={stylesHome.pata}> P.A.T.A. </text>
      <text style={stylesCadastrook.paragraph}>Ficamos extremamente felizes em ter ajudado, entre em contato com a pessoa abaixo para conhecer o novo membro da sua família. </text>
      <text style={stylesLogin.login}>Associação Riograndense de Proteção aos Animais</text>
      <text style={stylesCadastrook.paragraph}>Contato: :(51) 3223-1914</text>
      <div className="ong-localization" style={stylesLogin.espaco}>
        <Image style={styleAnimal.img} source={require('./pata-maps.png')} />
      </div>
      <div className="enviar" style={stylesLogin.espaco}>       
          <Pressable style={stylesCadastrook.btn} onPress={() => navigation.navigate('Bem vindo')}>
            <Text style={stylesCadastrook.btn} > OK</Text>
          </Pressable>
        </div>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainView} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Cadastrook" component={CadastrookScreen}/>
        <Stack.Screen name="Bem vindo" component={WelcomeScreen}/>
        <Stack.Screen name="Animais encontrados" component={FoundAnimals}/>
        <Stack.Screen name="Adoção de animais" component={AdoptAnimals}/>
        <Stack.Screen name="Animais disponíveis" component={AnimalScreen}/>
        <Stack.Screen name="Ongs parceiras" component={OngListScreen}/>
        <Stack.Screen name="Detalhes da ONG" component={OngDetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styleOngs = StyleSheet.create ({
container:{
  margin: 10,
  paddingBotton: 50,
  alignItems: 'center',
  textAlign: 'center',
  marginBotton: 20,
},
img: {
    width: 60,
    height: 60,
    margin: 20,
    marginLeft: 110,
  },
})

const styleAnimal = StyleSheet.create ({
  img: {
    width: 330,
    height: 220
  },
  img1: {
    width: 50,
    height: 50,
    marginLeft: 200,
    textAlign: 'right',
  },
  img2: {
    width: 50,
    height: 50,
    marginLeft: 10,
    textAlign: 'left',
  }
})

const stylesFounAnimal = StyleSheet.create({
  select: {
    borderRadius: 12,
    border: 'none',
    width: '100%',
    padding: 12,
    margin: 10,
    boxSizzing: 'borderBox',
    paddingLeft: 60,
    color: '#666666',
    paddingRight: 60
  }, 
  space: {
    margin: 10,
  }
})

const stylesCadastrook = StyleSheet.create({
paragraph: {
    fontSize: 15,
    color: '#ffee4a',
    fontFamily: 'Arial',
    textAlign: 'center',
    alignItems: 'center'
  },
  ok: {
    width: 200,
    height: 200,
    textAlign: 'center',
    margin: 30,
  },
  btn:{
    backgroundColor: '#ffee4a',
    border: 'none',
    color: '#77477e',
    borderRadius: 4,
    fontSize: 15,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    opacity: 0.9,
    transition: 0.3,
    textDecoration: 'none',
    transitionDuration: 0.4,
  },
  btn2:{
    backgroundColor: '#ffee4a',
    border: 'none',
    color: '#77477e',
    borderRadius: 4,
    fontSize: 15,
    margin: 10,
    marginRight: 28,
    marginLeft: 25,
    paddingLeft: 10,
    paddingRight: 10,
    opacity: 0.9,
    transition: 0.3,
    textDecoration: 'none',
    transitionDuration: 0.4,
  },
img: {
    width: 120,
    height: 120,
    textAlign: 'center',
  }
})

const stylesLogin = StyleSheet.create({
   espaco: {
     marginTop: 20,
   },
   img: {
    width: 120,
    height: 120,
    textAlign: 'center',
  },
  input: {
    borderRadius: 12,
    border: 'none',
    width: '100%',
    padding: 12,
    margin: 0,
    boxSizzing: 'borderBox',
  },
   paragraph: {
    fontSize: 15,
    color: '#ffee4a',
    fontFamily: 'Arial',
    textAlign: 'left',
    alignItems: 'left',
    marginBotton: 10,
  },
  esquerda: {
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 5,
    marginBotton: 10,
    paddingLeft: 5
  },
  login: {
    margin: 14,
    fontSize: 20,
    color: '#ffee4a',
    fontWeight: 'bold',
  },
})

const stylesHome = StyleSheet.create({
  pata: {
    fontWeight: 'bold',
    fontSize: 28,
    margin: 24,
    color: '#ffee4a',
    fontFamily: 'Arial',
    fontStyle: 'none',
  },
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#77477e',
    padding: 8,
    textAlign: 'center',
    alignItems: 'center',
    textDecorationColor: 'none',
    textDecorationStyle: 'none',
    fontFamily: 'Arial',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: '#ffee4a',
    fontFamily: 'Arial',
    fontStyle: 'none',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 180,
    height: 180,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor: '#ffee4a',
    border: 'none',
    color: '#77477e',
    borderRadius: 4,
    fontSize: 20,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    opacity: 0.9,
    transition: 0.3,
    textDecoration: 'none',
    transitionDuration: 0.4,
  },
  link : {
    fontWeight: 'bold',
    color: '#ffee4a',
    fontSize: 14,
  },
  ou : {
    color: '#ffee4a',
    fontSize: 14,
  }
});
