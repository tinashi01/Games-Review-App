class GamesController < ApplicationController
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorized, only: :index

    before_action :admin_user, only: [:create, :update, :destroy]

    def index
        # if statement for if viewing all games or specific game

        if params[:game_id]
            games = Game.find_by(id: params[:game_id])
        else
            games = Game.all
        end
        render json: games

    end


    def create
        game = Game.create(name: params[:name], image_url: params[:image_url], review: params[:review], rating: params[:rating])

        if game.valid?
            render json: game, status: :created
        else
            render json: {error: "Error in creating game"}, status: :unprocessable_entity
        end
    end
    
    def update
        game = Game.find(params[:id])

        game.update!(game_params)

        render json: game
    end

    def destroy
        game = Game.find_by(id: params[:id])
        
        if game
            game.destroy
            head :no_content
        else
            render json: {error: "Game not found"}, status: :not_found
        end
    end

    private

    def render_not_found_response
        render json: { error: "Game not found"}, status: :not_found 
    end

    def game_params
        params.permit(:id, :name, :image_url, :review, :rating)
    end

end
