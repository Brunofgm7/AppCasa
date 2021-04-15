package com.example.appcasa

import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.http.*

interface EndPointsService {

    @POST ("/api/register")
    fun addUser(@Body newUser: User): Call<User>

    @FormUrlEncoded
    @POST("/api/authenticate")
    fun userLogin(
        @Field("email") email: String,
        @Field("password") password: String,
    ): Call<LoginResponse>

    @GET("/checkToken")
    fun checkToken(
            @Header("Cookie" ) token: String
    ): Call<ResponseBody>

}