import React from 'react';
import { Image, ScrollView, StatusBar, Text, TouchableOpacity } from "react-native";
import { CustomInput } from '../../components/customInput';
import { useForm } from 'react-hook-form'
import {
    Container,
    ImagesContainer,
    ViewInputComponents,
    ViewInputs,
    TextSenha,
  } from './styles'

  const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-.]+(?:\. [a-zA-Z0-9-]+)*$/

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
 } = useForm({
    defaultValues: { email: 'kevin6@email.com', password: 'senha1' },
 })

export function SignIn () {
    return (
        <>
          <Container>
            <ScrollView>
              <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
              />
    

             <TextSenha> Minha lista de afazeres</TextSenha>
              <ViewInputComponents>
                
                <ViewInputs>
                  <CustomInput
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
                  />
    
                 
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
              
            </ScrollView>
          </Container>
        </>
      )
    }