class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    # protect_from_forgery with: :null_session
    # commented for testing with postman
    before_action :authorized

    def authorized
        return render json: { error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
