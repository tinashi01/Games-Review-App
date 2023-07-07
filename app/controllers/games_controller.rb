class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    def index
        games = Game.all
        render json: games, status: :ok
    end

    def create
        game = Game.create(game_params)

        if game.valid?
            render json: game, status: :created
        else
            render json: {error: game.errors}, status: :unprocessable_entity
        end
    end

    # def show 
    #     game = Game.find(params[:id])
    #     render json: game, include: :user
    # end
    
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
        params.permit(:name, :image_url, :review, :rating)
    end

end
