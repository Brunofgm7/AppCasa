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

    @GET("/api/item")
    fun getItem(): Call<List<Item>>

    @GET("/api/item/{id}")
    fun getItem(@Path("id") id: String): Call<List<Item>>

    @FormUrlEncoded
    @POST("/api/item")
    fun addItem(
        @Field("name") name: String,
        @Field("numero") numeroRefeicoes: String,
        @Field("stock") stock: String,
        @Field("notas") notas: String,
    ): Call<AddItemResponse>

    @FormUrlEncoded
    @POST("/api/item/{id}")
    fun updateItem(
            @Path("id") id: String,
            @Field("name") name: String,
            @Field("numero") numeroRefeicoes: String,
            @Field("stock") stock: String,
            @Field("notas") notas: String,
    ): Call<AddItemResponse>

    @DELETE("/api/item/{id}")
    fun deleteItem(@Path("id") id: String): Call<Unit>

    @GET("/api/profile/{email}")
    fun getProfile(@Path("email") email: String): Call<List<ProfileInfo>>

}