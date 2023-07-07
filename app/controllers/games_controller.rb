class GamesController < ApplicationController
    wrap_parameters format: []
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        games = Game.find_by(user_id: session[:user_id])

        if games
            render json: games, status: :ok
        else
            render json: { games: []}
        end
    end

    def create
        game = Game.create(name: params[:name], image_url: params[:image_url], review: params[:review], rating: params[:rating], user_id: session[:user_id])

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
        params.permit(:user_id, :id, :name, :image_url, :review, :rating)
    end

end
