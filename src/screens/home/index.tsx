import React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity } from "react-native";
import {
    Container,
    ImagesContainer,
    ViewInputComponents,
    ViewInputs,
    TextSenha,
  } from './style'

export function Home () {
    return (
        <>
          <Container>
            <ScrollView>
              <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
              />
    
              <ViewInputComponents>
                {/* <Image source={theme.icons.develfood} style={{ marginTop: -60 }} /> */}
                <ViewInputs>
                  {/* <CustomInput
                    image={require('../../assets/icons/E-mail.png')}
                    name="email"
                    placeholder="exemplo@email.com"
                    keybord="email-address"
                    control={control}
                    rules={{
                      required: 'usuario deve ser preenchido',
                      pattern: EMAIL_REGEX,
                    }}
                  />
                  <CustomInput
                    image={require('../../assets/icons/Password.png')}
                    name="password"
                    placeholder="senha"
                    control={control}
                    password={true}
                    rules={{
                      required: 'senha deve ser preenchida',
                      minLength: {
                        value: 5,
                        message: 'senha precisa de 5 caracters no mínimo',
                      },
                    }}
                  /> */}
    
                  <TextSenha>Esqueci minha senha</TextSenha>
{/*     
                  <ButtonStandard
                    onPressed={handleSubmit(() => {
                      handlerPost({
                        email: getValues().email,
                        password: getValues().password,
                      })
                    })}
                    title="Entrar"
                    isLoading={loading}
                  />
     */}
                  <TouchableOpacity onPress={ ()=> {}}>
                    <Text
                      style={{
                        fontSize: 14,
                        marginTop: 10,
                        alignSelf: 'flex-end',
                      }}
                    >
                      Não possui cadastro?
                      {
                        <Text
                          style={{
                            color: 'red',
                            position: 'absolute',
                            fontSize: 14,
                          }}
                        >
                          {' '}
                          Cadastre-se Aqui!
                        </Text>
                      }
                    </Text>
                  </TouchableOpacity>
                </ViewInputs>
              </ViewInputComponents>
              {/* <Image
                source={require('../../assets/icons/backgroundSignIn.png')}
                style={{ marginTop: -30 }}
              /> */}
            </ScrollView>
          </Container>
        </>
      )
    }