class FavouriteGamesController < ApplicationController
    wrap_parameters format: []

    def index
       user = User.find_by_id(session[:user_id])
       faves = user.favourite_games
       render json: faves, include: :game
    end

    # def show
    #     fave = FavouriteGame.find(params[:id])
    #     render json: fave
    # end

    def create
        fave = FavouriteGame.create(user_id: session[:user_id], game_id: params[:game_id])

        if fave.valid?
            render json: fave, status: :created
        else
            render json: {error: "Error in creating favourite"}, status: :unprocessable_entity
        end
    end

    def destroy
        fave = FavouriteGame.find_by(id: params[:id])

        if fave
            fave.destroy
            head :no_content
        else
            render json: {error: "Fave not found"}, status: :not_found
        end
    end



end
